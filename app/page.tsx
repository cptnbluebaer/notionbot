"use client"; // Füge dies am Anfang der Datei hinzu

import { createClient } from "./utils/supabase/client";
import { useEffect, useState } from "react";
import { ProfileForm } from "@/components/form/form";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <ProfileForm />
        </div>
      </div>
    </>
  );
}
