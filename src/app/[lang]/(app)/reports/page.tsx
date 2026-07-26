import { redirect } from "next/navigation";

export default async function ReportsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  redirect(`/${(await params).lang}/reports/contracts`);
}
