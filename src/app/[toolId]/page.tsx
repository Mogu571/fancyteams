import { tools, jobs } from "@/data/tools";
import CompanyDetail from "@/components/CompanyDetail";

export function generateStaticParams() {
  return tools.map((t) => ({ toolId: t.id }));
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ toolId: string }>;
}) {
  const { toolId } = await params;
  const tool = tools.find((t) => t.id === toolId) ?? null;
  const toolJobs = jobs.filter((j) => j.toolId === toolId);
  return <CompanyDetail tool={tool} jobs={toolJobs} />;
}
