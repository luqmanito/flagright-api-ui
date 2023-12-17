import { fonts } from "@/app/font";
import { LoadingProvider } from "@/Context/loading";
import { ResponseProvider } from "@/Context/Response";
import { Providers } from "@/app/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <LoadingProvider>
          <ResponseProvider>
            <Providers>{children}</Providers>
          </ResponseProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
