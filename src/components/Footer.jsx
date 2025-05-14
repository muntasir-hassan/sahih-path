export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground text-center py-4 relative bottom-0 w-full">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Sahih Path. All rights reserved.
      </p>
    </footer>
  );
}
