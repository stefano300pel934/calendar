import contactAction, { getConfig } from "./api/add-pet/server-action";
import Form from "./api/add-pet/form";

export default async function ContactPage() {
  const config = await getConfig();

  return (
    <>
      <h1 className="text-2xl font-bold mb-3">Contact Us</h1>
      <Form config={config} action={contactAction}></Form>
    </>
  );
}