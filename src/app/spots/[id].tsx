import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Spot {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const SpotPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [spot, setSpot] = useState<Spot | null>(null);

  useEffect(() => {
    if (id) {
      // Simulating fetching data based on the ID
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      fetch(`/api/spots/${id}`)
        .then((res) => res.json())
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        .then((data) => setSpot(data))
        .catch((err) => console.error("Error fetching spot data:", err));
    }
  }, [id]);

  if (!spot) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{spot.name}</h1>
      <img src={spot.imageUrl} alt={spot.name} />
      <p>{spot.description}</p>
      <Link href="/spots">
        <button className="text-blue-600 underline">Back to All Spots</button>
      </Link>
    </div>
  );
};

export default SpotPage;
