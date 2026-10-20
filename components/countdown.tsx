"use client";

import { useEffect, useState } from "react";
import { pad, remaining } from "@/lib/wedding";

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    let timer = 0;
    const tick = () => {
      setNow(Date.now());
      timer = window.setTimeout(tick, 1000 - (Date.now() % 1000));
    };
    tick();
    return () => window.clearTimeout(timer);
  }, []);

  const time = now === null ? null : remaining(now);
  const days = time ? String(time.days) : "---";
  const hours = time ? pad(time.hours) : "--";
  const minutes = time ? pad(time.minutes) : "--";
  const seconds = time ? pad(time.seconds) : "--";

  const detail = !time
    ? "시간을 세는 중"
    : time.done
      ? "오늘, 우리가 결혼합니다"
      : `${time.days}일 ${pad(time.hours)}시간 ${pad(time.minutes)}분 ${pad(time.seconds)}초 남음`;

  return (
    <div className="clock" aria-label="결혼식까지 남은 시간">
      <div className="clock-top" aria-hidden="true">
        <span className="traffic">
          <i />
          <i />
          <i />
        </span>
      </div>
      <p className="d-day">
        <span>D</span>
        <span className="dash">-</span>
        <span className="d-num">{time?.done ? "DAY" : days}</span>
      </p>
      <div className="units">
        <Unit value={days} label="DAYS" />
        <Unit value={hours} label="HOURS" />
        <Unit value={minutes} label="MIN" />
        <Unit value={seconds} label="SEC" tick={time !== null} />
      </div>
      <p className="detail">{detail}</p>
    </div>
  );
}

function Unit({
  value,
  label,
  tick = false,
}: {
  value: string;
  label: string;
  tick?: boolean;
}) {
  return (
    <div className="unit">
      <b key={tick ? value : label}>{value}</b>
      <span>{label}</span>
    </div>
  );
}
