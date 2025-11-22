import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { MessageCircle, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface Thread {
  id: string;
  title: string;
  category: string;
  county: string | null;
  created_at: string;
  created_by: string;
  profiles: {
    full_name: string | null;
    school_name: string | null;
  };
  teacher_messages: { count: number }[];
}

interface Message {
  id: string;
  message: string;
  created_at: string;
  profiles: {
    full_name: string | null;
    school_name: string | null;
  };
}

const TeacherCommunity = () => {
  const { profile } = useAuth();
  const [threads, setThreads] = useState<Thread[]>([]);
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [newThreadOpen, setNewThreadOpen] = useState(false);
  
  // New thread form
  const [threadTitle, setThreadTitle] = useState("");
  const [threadCategory, setThreadCategory] = useState("");
  const [threadCounty, setThreadCounty] = useState("");

  useEffect(() => {
    if (profile?.role === "teacher") {
      fetchThreads();
    }
  }, [profile]);

  useEffect(() => {
    if (selectedThread) {
      fetchMessages(selectedThread.id);
    }
  }, [selectedThread]);

  const fetchThreads = async () => {
    const { data, error } = await supabase
      .from("teacher_threads")
      .select(`
        *,
        profiles:created_by (full_name, school_name),
        teacher_messages (count)
      `)
      .order("updated_at", { ascending: false });

    if (data && !error) {
      setThreads(data as Thread[]);
    }
  };

  const fetchMessages = async (threadId: string) => {
    const { data, error } = await supabase
      .from("teacher_messages")
      .select(`
        *,
        profiles:user_id (full_name, school_name)
      `)
      .eq("thread_id", threadId)
      .order("created_at", { ascending: true });

    if (data && !error) {
      setMessages(data as Message[]);
    }
  };

  const createThread = async () => {
    if (!threadTitle || !threadCategory || !profile) return;

    const { error } = await supabase
      .from("teacher_threads")
      .insert({
        title: threadTitle,
        category: threadCategory,
        county: threadCounty || null,
        created_by: profile.id,
      });

    if (error) {
      toast.error("Failed to create thread");
    } else {
      toast.success("Thread created!");
      setNewThreadOpen(false);
      setThreadTitle("");
      setThreadCategory("");
      setThreadCounty("");
      fetchThreads();
    }
  };

  const sendMessage = async () => {
    if (!newMessage || !selectedThread || !profile) return;

    const { error } = await supabase
      .from("teacher_messages")
      .insert({
        thread_id: selectedThread.id,
        user_id: profile.id,
        message: newMessage,
      });

    if (error) {
      toast.error("Failed to send message");
    } else {
      setNewMessage("");
      fetchMessages(selectedThread.id);
      fetchThreads();
    }
  };

  if (profile?.role !== "teacher") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="card-eco p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Teachers Only</h2>
            <p className="text-muted-foreground">This space is exclusively for teachers to connect and share ideas.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Teacher Community</h1>
              <p className="text-muted-foreground">Connect, share, and learn with fellow 4K Club teachers</p>
            </div>
            
            <Dialog open={newThreadOpen} onOpenChange={setNewThreadOpen}>
              <DialogTrigger asChild>
                <Button className="btn-eco">
                  <Plus className="w-4 h-4 mr-2" />
                  New Thread
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Start a New Discussion</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div>
                    <Label>Thread Title</Label>
                    <Input
                      placeholder="What's your topic?"
                      value={threadTitle}
                      onChange={(e) => setThreadTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <Select value={threadCategory} onValueChange={setThreadCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Curriculum">Curriculum & Lesson Planning</SelectItem>
                        <SelectItem value="Activities">Activity Ideas</SelectItem>
                        <SelectItem value="Resources">Resource Sharing</SelectItem>
                        <SelectItem value="Challenges">Challenges & Solutions</SelectItem>
                        <SelectItem value="Success">Success Stories</SelectItem>
                        <SelectItem value="General">General Discussion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>County (Optional)</Label>
                    <Input
                      placeholder="e.g., Nairobi"
                      value={threadCounty}
                      onChange={(e) => setThreadCounty(e.target.value)}
                    />
                  </div>
                  <Button onClick={createThread} className="btn-eco w-full">
                    Create Thread
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Threads List */}
            <div className="md:col-span-1 space-y-3">
              <h3 className="font-semibold mb-4">Discussion Threads</h3>
              {threads.map((thread) => (
                <div
                  key={thread.id}
                  onClick={() => setSelectedThread(thread)}
                  className={`card-eco p-4 cursor-pointer hover:scale-105 transition-all ${
                    selectedThread?.id === thread.id ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm line-clamp-2">{thread.title}</h4>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div className="badge-eco text-xs">{thread.category}</div>
                    <div>by {thread.profiles?.full_name || "Unknown"}</div>
                    {thread.county && <div>📍 {thread.county}</div>}
                    <div className="flex items-center gap-1 mt-2">
                      <MessageCircle className="w-3 h-3" />
                      {thread.teacher_messages?.[0]?.count || 0} replies
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Messages Panel */}
            <div className="md:col-span-2">
              {selectedThread ? (
                <div className="card-eco p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{selectedThread.title}</h2>
                    <div className="text-sm text-muted-foreground">
                      Started by {selectedThread.profiles?.full_name} from {selectedThread.profiles?.school_name}
                      {selectedThread.county && ` • ${selectedThread.county}`}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {messages.map((msg) => (
                      <div key={msg.id} className="p-4 bg-accent rounded-xl">
                        <div className="flex items-start justify-between mb-2">
                          <div className="font-semibold text-sm">
                            {msg.profiles?.full_name || "Anonymous"}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(msg.created_at).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {msg.profiles?.school_name}
                        </div>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Textarea
                      placeholder="Share your thoughts..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      rows={3}
                    />
                    <Button onClick={sendMessage} className="btn-eco">
                      Send Message
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="card-eco p-12 text-center">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Select a Discussion</h3>
                  <p className="text-muted-foreground">Choose a thread to view and participate in the conversation</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCommunity;
