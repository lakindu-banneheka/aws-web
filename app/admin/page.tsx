'use client'

import { useRouter } from "next/navigation";


const adminPage = () => {
    const router = useRouter();
  return router.replace("/admin/dashboard");
};

export default adminPage;