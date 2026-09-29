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
  Row,
  Column,
  Section,
  Text,
} from "@react-email/components";

type EnquiryAdminAlertEmailProps = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const siteUrl = "https://primeautointernational.com";

export function EnquiryAdminAlertEmail({
  name,
  phone,
  email,
  interest,
  message,
}: EnquiryAdminAlertEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        New enquiry from {name} — {interest}
      </Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Img
              src={`${siteUrl}/logo-mark-transparent.png`}
              width="132"
              height="56"
              alt="Prime Auto International"
              style={styles.logo}
            />
            <Text style={styles.eyebrow}>New website enquiry</Text>
          </Section>

          <Section style={styles.card}>
            <Heading style={styles.heading}>Customer request received</Heading>
            <Text style={styles.lead}>
              A visitor submitted the contact form on{" "}
              <Link href={siteUrl} style={styles.link}>
                primeautointernational.com
              </Link>
              .
            </Text>

            <Section style={styles.grid}>
              <Row>
                <Column style={styles.col}>
                  <Text style={styles.label}>Name</Text>
                  <Text style={styles.value}>{name}</Text>
                </Column>
                <Column style={styles.col}>
                  <Text style={styles.label}>Interest</Text>
                  <Text style={styles.value}>{interest}</Text>
                </Column>
              </Row>
              <Row>
                <Column style={styles.col}>
                  <Text style={styles.label}>Phone</Text>
                  <Text style={styles.value}>
                    <Link href={`tel:${phone.replace(/\s+/g, "")}`} style={styles.link}>
                      {phone}
                    </Link>
                  </Text>
                </Column>
                <Column style={styles.col}>
                  <Text style={styles.label}>Email</Text>
                  <Text style={styles.value}>
                    <Link href={`mailto:${email}`} style={styles.link}>
                      {email}
                    </Link>
                  </Text>
                </Column>
              </Row>
            </Section>

            <Text style={styles.label}>Message</Text>
            <Section style={styles.messageBox}>
              <Text style={styles.message}>{message}</Text>
            </Section>

            <Hr style={styles.hr} />

            <Text style={styles.meta}>
              Reply directly to this email to respond to the customer.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default EnquiryAdminAlertEmail;

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
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "1.2",
    margin: "0 0 12px",
  },
  lead: {
    color: "#5a6f88",
    fontSize: "14px",
    lineHeight: "1.6",
    margin: "0 0 24px",
  },
  grid: {
    margin: "0 0 18px",
  },
  col: {
    paddingBottom: "14px",
    paddingRight: "12px",
    verticalAlign: "top" as const,
    width: "50%",
  },
  label: {
    color: "#5a6f88",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.14em",
    margin: "0 0 6px",
    textTransform: "uppercase" as const,
  },
  value: {
    color: "#0c1b33",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "1.45",
    margin: "0",
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
    margin: "22px 0",
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
};
