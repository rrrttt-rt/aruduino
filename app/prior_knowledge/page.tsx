import { lusitana } from '../ui/fonts';
import PriorKnowledgeContent from '@/app/ui/prior_knowledge/knowledge';

export default function PriorKnowledge() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4 mb-4">
        <h1 className="text-2xl font-bold text-white">予備知識</h1>
      </div>
      <div className="flex grow flex-col gap-4">
        <PriorKnowledgeContent />
      </div>
    </div>
  );
}