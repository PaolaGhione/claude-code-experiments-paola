export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "#0e0d0c", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <div className="flex items-center gap-2.5">
              {/* Anthropic wordmark-style lockup */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M14.07 3H11.5L7 17h2.6l1-3.12h4.8L16.4 17H19L14.07 3ZM11.3 11.6l1.7-5.28 1.7 5.28H11.3ZM8.5 3H6L1 17h2.6l1-3.12h4.8L10.4 17H13L8.5 3Z"
                  fill="currentColor"
                  style={{ color: "#d97757" }}
                />
              </svg>
              <span
                className="text-sm font-semibold tracking-wide"
                style={{
                  color: "#f2efe9",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                HookHub
              </span>
            </div>
            <p
              className="max-w-[220px] text-center text-xs leading-relaxed sm:text-left"
              style={{
                color: "rgba(255,255,255,0.28)",
                fontFamily: "var(--font-lora), Lora, Georgia, serif",
              }}
            >
              Community-built hooks for Claude Code. Open source, always free.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-16">
            <nav aria-label="Resources">
              <p
                className="mb-3 text-[10px] font-semibold uppercase tracking-widest"
                style={{
                  color: "rgba(255,255,255,0.22)",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                Resources
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  {
                    label: "Claude Code Docs",
                    href: "https://docs.anthropic.com/en/docs/claude-code/hooks",
                  },
                  {
                    label: "Hook Reference",
                    href: "https://docs.anthropic.com/en/docs/claude-code/hooks#hook-types",
                  },
                  {
                    label: "Claude Code Overview",
                    href: "https://docs.anthropic.com/en/docs/claude-code/overview",
                  },
                ].map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Anthropic">
              <p
                className="mb-3 text-[10px] font-semibold uppercase tracking-widest"
                style={{
                  color: "rgba(255,255,255,0.22)",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                Anthropic
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "anthropic.com", href: "https://anthropic.com" },
                  { label: "Claude", href: "https://claude.ai" },
                  {
                    label: "API Console",
                    href: "https://console.anthropic.com",
                  },
                ].map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center gap-3 border-t pt-6 sm:flex-row sm:justify-between"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-xs"
            style={{
              color: "rgba(255,255,255,0.2)",
              fontFamily: "var(--font-lora), Lora, Georgia, serif",
            }}
          >
            Built with Claude Code &amp; the Anthropic API.
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="text-xs"
              style={{
                color: "rgba(255,255,255,0.2)",
                fontFamily: "var(--font-lora), Lora, Georgia, serif",
              }}
            >
              Powered by
            </span>
            <a
              href="https://anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition-colors duration-150"
              style={{
                borderColor: "rgba(217,119,87,0.25)",
                backgroundColor: "rgba(217,119,87,0.07)",
                color: "rgba(217,119,87,0.75)",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(217,119,87,0.5)";
                e.currentTarget.style.backgroundColor = "rgba(217,119,87,0.14)";
                e.currentTarget.style.color = "#d97757";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(217,119,87,0.25)";
                e.currentTarget.style.backgroundColor = "rgba(217,119,87,0.07)";
                e.currentTarget.style.color = "rgba(217,119,87,0.75)";
              }}
            >
              Anthropic
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs transition-colors duration-150"
      style={{
        color: "rgba(255,255,255,0.32)",
        fontFamily: "var(--font-lora), Lora, Georgia, serif",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "rgba(217,119,87,0.8)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = "rgba(255,255,255,0.32)")
      }
    >
      {children}
    </a>
  );
}
