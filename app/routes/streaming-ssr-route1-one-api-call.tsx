import type { LoaderArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { sleep } from "~/utils";

const getPeopleDelayTime = 3000;
const getPeople = async () => {
  await sleep(getPeopleDelayTime);

  return [{ name: "adam" }, { name: "ben" }];
};

export async function loader({ request }: LoaderArgs) {
  const deferredPeoplePromise = getPeople();

  return defer({
    people: deferredPeoplePromise,
  });
}

export default function Page() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        Welcome to Remix{" "}
        <span style={{ fontSize: 20 }}>
          (This page was rendered via SSR streaming)
        </span>
      </h1>

      <Suspense
        fallback={
          <>
            <h2>People data loading...</h2>
          </>
        }
      >
        <Await resolve={data.people} errorElement={<div>Error</div>}>
          {(people) => (
            <>
              <h2>People</h2>
              <ul>
                {people.map((person, i) => (
                  <li key={i}>{person.name}</li>
                ))}
              </ul>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
