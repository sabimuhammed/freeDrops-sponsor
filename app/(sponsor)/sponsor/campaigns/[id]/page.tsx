import { redirect } from "next/navigation";

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  redirect(`/sponsor/campaigns/${params.id}/overview`);
}
