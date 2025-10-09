export default function Footer() {
	return (
		<footer className="w-full border-t mt-8 mx-auto px-4 py-6 flex items-center justify-between text-sm text-white bg-red-800">
				<div>© {new Date().getFullYear()} Copyright - LOGO </div>
				<div className="flex items-center gap-4">
					<a href="/about" className="hover:underline">About</a>
					<a href="/contact" className="hover:underline">Contact</a>
				</div>
		</footer>
	);
}
