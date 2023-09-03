export default function Footer() {
  return (
    <div className="sticky top-[100vh] p-3">
      <footer className="flex justify-center text-xl">
        Copyright &copy; {new Date().getFullYear()} Jeeva. | All rights
        reserved.
      </footer>
    </div>
  );
}
