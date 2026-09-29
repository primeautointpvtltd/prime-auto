import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type EnquiryConfirmationEmailProps = {
  name: string;
  interest: string;
  message: string;
};

const siteUrl = "https://primeautointernational.com";

export function EnquiryConfirmationEmail({
  name,
  interest,
  message,
}: EnquiryConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        We received your enquiry about {interest}. Our team will respond shortly.
      </Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Img
              src={`${siteUrl}/logo-mark-transparent.png`}
              width="148"
              height="62"
              alt="Prime Auto International"
              style={styles.logo}
            />
            <Text style={styles.eyebrow}>Prime Auto International</Text>
          </Section>

          <Section style={styles.card}>
            <Heading style={styles.heading}>Thank you, {name}</Heading>
            <Text style={styles.lead}>
              Your enquiry is with our team. We typically respond within one
              business day with clear next steps.
            </Text>

            <Section style={styles.badgeWrap}>
              <Text style={styles.badgeLabel}>Interest</Text>
              <Text style={styles.badge}>{interest}</Text>
            </Section>

            <Text style={styles.label}>Your message</Text>
            <Section style={styles.messageBox}>
              <Text style={styles.message}>{message}</Text>
            </Section>

            <Hr style={styles.hr} />

            <Text style={styles.meta}>
              Prefer to speak now? Call{" "}
              <Link href="tel:+94768931709" style={styles.link}>
                076 893 1709
              </Link>
              ,{" "}
              <Link href="tel:+94759094211" style={styles.link}>
                075 909 4211
              </Link>
              , or{" "}
              <Link href="tel:+94761718046" style={styles.link}>
                076 171 8046
              </Link>
              .
            </Text>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerTitle}>
              Prime Auto International (Pvt) Ltd.
            </Text>
            <Text style={styles.footerText}>
              Colombo Road, Kurunegala, Sri Lanka
              <br />
              Importers &amp; exporters · Motor spares &amp; machineries
              <br />
              Established 1995
            </Text>
            <Link href={siteUrl} style={styles.footerLink}>
              primeautointernational.com
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default EnquiryConfirmationEmail;

const styles = {
  body: {
    backgroundColor: "#eef4fa",
    fontFamily:
      'Arial, Helvetica, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    margin: "0",
    padding: "24px 12px",
  },
  container: {
    margin: "0 auto",
    maxWidth: "560px",
  },
  header: {
    padding: "8px 8px 20px",
    textAlign: "center" as const,
  },
  logo: {
    display: "block",
    margin: "0 auto 10px",
  },
  eyebrow: {
    color: "#1a6fbf",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.22em",
    margin: "0",
    textTransform: "uppercase" as const,
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #d7e6f4",
    borderRadius: "12px",
    padding: "32px 28px",
  },
  heading: {
    color: "#062a5c",
    fontSize: "26px",
    fontWeight: "700",
    lineHeight: "1.2",
    margin: "0 0 12px",
  },
  lead: {
    color: "#5a6f88",
    fontSize: "15px",
    lineHeight: "1.6",
    margin: "0 0 24px",
  },
  badgeWrap: {
    margin: "0 0 22px",
  },
  badgeLabel: {
    color: "#5a6f88",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.14em",
    margin: "0 0 8px",
    textTransform: "uppercase" as const,
  },
  badge: {
    backgroundColor: "#e8f4fc",
    borderRadius: "999px",
    color: "#062a5c",
    display: "inline-block",
    fontSize: "13px",
    fontWeight: "700",
    margin: "0",
    padding: "8px 14px",
  },
  label: {
    color: "#5a6f88",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.14em",
    margin: "0 0 8px",
    textTransform: "uppercase" as const,
  },
  messageBox: {
    backgroundColor: "#f7fbfe",
    borderLeft: "3px solid #3eb6e8",
    borderRadius: "0 8px 8px 0",
    margin: "0 0 8px",
    padding: "14px 16px",
  },
  message: {
    color: "#0c1b33",
    fontSize: "14px",
    lineHeight: "1.65",
    margin: "0",
    whiteSpace: "pre-wrap" as const,
  },
  hr: {
    borderColor: "#e2eef8",
    margin: "24px 0",
  },
  meta: {
    color: "#5a6f88",
    fontSize: "13px",
    lineHeight: "1.6",
    margin: "0",
  },
  link: {
    color: "#0b4f9c",
    textDecoration: "none",
  },
  footer: {
    padding: "24px 8px 8px",
    textAlign: "center" as const,
  },
  footerTitle: {
    color: "#062a5c",
    fontSize: "13px",
    fontWeight: "700",
    margin: "0 0 6px",
  },
  footerText: {
    color: "#5a6f88",
    fontSize: "12px",
    lineHeight: "1.6",
    margin: "0 0 10px",
  },
  footerLink: {
    color: "#1a6fbf",
    fontSize: "12px",
    textDecoration: "none",
  },
};
