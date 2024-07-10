import { ROUTES } from "@/constants";
import { useRouter } from "expo-router";
const router = useRouter();
export const isProtectedRoute = (segment: string) => {
  return ROUTES.PROTECTED_ROUTES.includes(segment);
};
export const isLoggedIn = (segment: string) => {
  return ROUTES.ROUTES.includes(segment);
};
export const handleRouteNavigation = (route: string) => {
  router.navigate(`/${route}`);
};
