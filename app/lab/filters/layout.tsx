export default function Layout(props: {
  children: React.ReactNode;
  filterModal: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.filterModal}
    </>
  );
}
