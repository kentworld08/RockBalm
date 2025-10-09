const page = ({ params }: { params: { id: number } }) => {
  const { id } = params;

  return <div>page{id}</div>;
};

export default page;
