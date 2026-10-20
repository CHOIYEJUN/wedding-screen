export const CEREMONY_AT = "2027-07-10T11:00:00+09:00";

export const wedding = {
  groom: "최예준",
  bride: "양윤주",
  place: "서울대학교 연구공원",
  when: "2027년 7월 10일 토요일 오전 11시",
  iso: CEREMONY_AT,
  mapUrl: "https://map.naver.com/p/search/서울대학교%20연구공원",
} as const;

export function remaining(now: number) {
  const target = new Date(CEREMONY_AT).getTime();
  const diff = Math.max(0, target - now);
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, done: diff <= 0 };
}

export function pad(value: number) {
  return value.toString().padStart(2, "0");
}
