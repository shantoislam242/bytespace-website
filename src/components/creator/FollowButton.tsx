"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Button aria-pressed={isFollowing} onClick={() => setIsFollowing(!isFollowing)} className="text-ink">
      {isFollowing ? "Following" : "Follow"}
    </Button>
  );
}
