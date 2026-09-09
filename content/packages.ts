export type Package = {
  slug: string;
  name: string;
  tagline: string;
  days: number;
  summary: string;
  components: { type: "accommodation" | "transfer" | "activity"; note: string }[];
};

export const packages: Package[] = [
  { slug: "rift-valley-classic", name: "Rift Valley Classic", tagline: "The essential first safari.", days: 3,
    summary: "Three days at a single camp, built around dawn drives.",
    components: [{ type: "accommodation", note: "2 nights tented camp" }, { type: "transfer", note: "Airstrip pickup/drop-off" }, { type: "activity", note: "2x dawn game drive" }] },
  { slug: "migration-route", name: "Migration Route", tagline: "Follow the herds across two camps.", days: 5,
    summary: "Five days split across two camps along the migration corridor.",
    components: [{ type: "accommodation", note: "2 nights camp A, 2 nights camp B" }, { type: "transfer", note: "Inter-camp transfer" }, { type: "activity", note: "4x game drive" }] },
  { slug: "walking-wilderness", name: "Walking Wilderness", tagline: "On foot, guided, slower.", days: 4,
    summary: "Four days at a walking-safari camp.",
    components: [{ type: "accommodation", note: "3 nights walking camp" }, { type: "transfer", note: "Airstrip pickup/drop-off" }, { type: "activity", note: "3x guided walk" }] },
  { slug: "family-crossing", name: "Family Crossing", tagline: "Shorter drives, family tents.", days: 4,
    summary: "Four days paced for families, with a cultural visit.",
    components: [{ type: "accommodation", note: "3 nights family tent" }, { type: "transfer", note: "Airstrip pickup/drop-off" }, { type: "activity", note: "1x village visit" }] },
  { slug: "grand-traverse", name: "Grand Traverse", tagline: "The full route, three camps.", days: 8,
    summary: "Eight days across three camps, full activity mix.",
    components: [{ type: "accommodation", note: "3 camps, 7 nights" }, { type: "transfer", note: "2x inter-camp transfer" }, { type: "activity", note: "Full activity mix" }] },
];