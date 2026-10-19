export interface SocialLink {
  id: string;
  name: string;
  url: string;
  platform: 'instagram' | 'facebook' | 'kwai' | 'tiktok' | 'youtube' | 'threads';
  color: string;
  hoverColor: string;
  handle: string;
}

export interface PurchaseNotificationItem {
  id: number;
  timeAgo: string;
  location: string;
  deliveryType: string;
}

export interface BloodPressureCategory {
  category: string;
  label: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  rangeSystolic: string;
  rangeDiastolic: string;
  advice: string;
}
