interface ActionCardProps {
  name: string;
  points: number;
  icon: string;
  color: string;
  onClick: () => void;
}

const ActionCard = ({ name, points, icon, color, onClick }: ActionCardProps) => {
  return (
    <button
      onClick={onClick}
      className="card-eco p-6 hover:scale-105 transition-all text-left w-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`text-4xl p-3 rounded-xl ${color} bg-opacity-10`}>
          {icon}
        </div>
        <div className="badge-eco">
          {points} pts
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground">Click to log action</p>
    </button>
  );
};

export default ActionCard;
