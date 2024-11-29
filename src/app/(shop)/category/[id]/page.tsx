type CategoryByIdPageProps = {
  params: { id: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function CategoryByIdPage({ params }: CategoryByIdPageProps) {
  return (
    <div>
      <h1>Hello CategoryByIdPage</h1>
    </div>
  );
}
