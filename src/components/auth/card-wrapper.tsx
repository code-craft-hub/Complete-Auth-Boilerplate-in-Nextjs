"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";
import { Suspense } from "react";
import { Loader } from "lucide-react";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <div>
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <CardTitle>
            <Header label={headerLabel} />
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {showSocial && (
          <CardFooter>
            <Suspense
              fallback={
                <div className="h-screen w-full flex gap-4 items-center justify-center">
                  <Loader className="size-6 animate-spin" />
                  Loading...
                </div>
              }
            >
              <Social />
            </Suspense>
          </CardFooter>
        )}
        <CardFooter>
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </Card>
    </div>
  );
};
