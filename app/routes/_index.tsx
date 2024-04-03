import {
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { db } from "~/module/orm.server"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ]
}

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const data = await db(context.cloudflare.env as Env).query.sample.findMany()
  return data
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {data.toString()}
    </div>
  )
}
