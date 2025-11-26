// app/emails/ArtonEligibilityEmail.tsx
import * as React from "react";

interface ArtonEligibilityEmailProps {
  name: string;
  email: string;
  country: string;
  budget: string;
  family: string;
  timeline: string;
}

export function ArtonEligibilityEmail(props: ArtonEligibilityEmailProps) {
  const { name, email, country, budget, family, timeline } = props;

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        backgroundColor: "#0b0b0b",
        color: "#f5f5f5",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "20px", margin: "0 0 8px" }}>
        New Citizenship Eligibility Assessment
      </h1>
      <p style={{ margin: "0 0 16px", fontSize: "13px", opacity: 0.8 }}>
        A new lead has been submitted from the Arton Capital website.
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "13px",
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: "8px 0", width: "160px", opacity: 0.7 }}>
              Name
            </td>
            <td style={{ padding: "8px 0" }}>{name}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", opacity: 0.7 }}>Email</td>
            <td style={{ padding: "8px 0" }}>{email}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", opacity: 0.7 }}>
              Country of residence
            </td>
            <td style={{ padding: "8px 0" }}>{country}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", opacity: 0.7 }}>
              Investment capacity
            </td>
            <td style={{ padding: "8px 0" }}>{budget}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", opacity: 0.7 }}>
              Family composition
            </td>
            <td style={{ padding: "8px 0" }}>{family}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", opacity: 0.7 }}>Timeline</td>
            <td style={{ padding: "8px 0" }}>{timeline}</td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: "24px", fontSize: "12px", opacity: 0.7 }}>
        This email was generated automatically from the Citizenship by
        Investment assessment form on your website.
      </p>
    </div>
  );
}
