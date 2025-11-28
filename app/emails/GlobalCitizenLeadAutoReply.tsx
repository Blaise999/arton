// app/emails/GlobalCitizenLeadAutoReply.tsx
import * as React from "react";

interface GlobalCitizenLeadAutoReplyProps {
  fname?: string;
  fullName?: string;
}

export default function GlobalCitizenLeadAutoReply({
  fname,
}: GlobalCitizenLeadAutoReplyProps) {
  const siteUrl = "https://artoncapitals.com";
  const logoUrl = `${siteUrl}/Pics/logo.png`;
  const bannerUrl = `${siteUrl}/Pics/img.png`;
  const firstName = fname || "Client";

  return (
    <div
      style={{
        margin: 0,
        padding: "24px 0",
        backgroundColor: "#f3f4f6",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        color: "#111827",
      }}
    >
      <table
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        style={{ borderCollapse: "collapse" }}
      >
        <tbody>
          <tr>
            <td align="center">
              {/* Card */}
              <table
                width={640}
                cellPadding={0}
                cellSpacing={0}
                style={{
                  borderCollapse: "collapse",
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow:
                    "0 18px 45px rgba(15,23,42,0.18), 0 0 0 1px rgba(15,23,42,0.03)",
                }}
              >
                <tbody>
                  {/* HEADER */}
                  <tr>
                    <td
                      align="center"
                      style={{
                        padding: "28px 32px 18px",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      <a
                        href={siteUrl}
                        style={{
                          textDecoration: "none",
                          display: "inline-block",
                        }}
                      >
                        <div
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: "999px",
                            backgroundColor: "#000000",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 16px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={logoUrl}
                            alt="Arton Capital"
                            style={{
                              width: "64px",
                              height: "64px",
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                        </div>
                      </a>

                      <a
                        href={siteUrl}
                        style={{
                          textDecoration: "none",
                          color: "#111827",
                          display: "inline-block",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 13,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          ARTON CAPITAL
                        </div>
                        <div
                          style={{
                            marginTop: 6,
                            fontSize: 11,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "#6b7280",
                            textAlign: "center",
                          }}
                        >
                          EMPOWERING GLOBAL CITIZENSHIP®
                        </div>
                      </a>

                      <div
                        style={{
                          marginTop: 20,
                          width: 32,
                          height: 1,
                          backgroundColor: "#d1d5db",
                        }}
                      />
                    </td>
                  </tr>

                  {/* MAIN CONTENT */}
                  <tr>
                    <td
                      style={{
                        padding: "24px 32px 16px",
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "#111827",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 10px",
                          fontSize: 13,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "#6b7280",
                        }}
                      >
                        Global Citizen Inquiry Received
                      </p>

                      <p
                        style={{
                          margin: "0 0 18px",
                          fontSize: 16,
                          fontWeight: 600,
                          letterSpacing: "0.02em",
                        }}
                      >
                        Dear {firstName},
                      </p>

                      <p style={{ margin: "0 0 12px" }}>
                        Thank you for contacting <strong>Arton Capital</strong>{" "}
                        and taking the first step towards becoming a Global
                        Citizen.
                      </p>

                      <p style={{ margin: "0 0 12px" }}>
                        Our team will carefully review your information and get
                        in touch within <strong>24 hours</strong> to discuss the
                        most suitable residence and citizenship programs for
                        your goals.
                      </p>

                      <p style={{ margin: "0 0 12px" }}>
                        In the meantime, if you have any urgent questions, you
                        can reply directly to this email and one of our advisors
                        will assist you.
                      </p>

                      <p style={{ margin: "0 0 18px" }}>
                        We look forward to guiding you on your journey.
                      </p>

                      <p style={{ margin: "0 0 18px" }}>
                        Warm regards,
                        <br />
                        <strong>Arton Capital Team</strong>
                      </p>

                      <div style={{ marginTop: 8 }}>
                        <a
                          href={`${siteUrl}/global-citizen-programs`}
                          style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            borderRadius: 999,
                            backgroundColor: "#000000",
                            color: "#f9fafb",
                            fontSize: 13,
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                          }}
                        >
                          Explore Our Programs
                        </a>
                      </div>
                    </td>
                  </tr>

                  {/* BANNER */}
                  <tr>
                    <td>
                      <a href={siteUrl} style={{ display: "block" }}>
                        <img
                          src={bannerUrl}
                          alt="The world is yours"
                          style={{
                            width: "100%",
                            maxHeight: 260,
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </a>
                    </td>
                  </tr>

                  {/* FOOTER */}
                  <tr>
                    <td
                      style={{
                        padding: "16px 32px 24px",
                        borderTop: "1px solid #e5e7eb",
                        fontSize: 12,
                        color: "#6b7280",
                      }}
                    >
                      <p style={{ margin: "0 0 4px", fontWeight: 600 }}>
                        Arton Capital
                      </p>
                      <p style={{ margin: "0 0 4px" }}>
                        1 Westmount Square, Suite 1110, Montreal, Quebec, H3Z
                        2P9
                      </p>
                      <p style={{ margin: "0 0 8px" }}>
                        Boulevard Plaza, Tower 1, Level 20, Suite 2004, Burj
                        Khalifa District, P.O.Box 121701, Dubai
                      </p>
                      <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>
                        This email may contain confidential information intended
                        solely for the addressee. If you received it in error,
                        please notify the sender and delete this message.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
