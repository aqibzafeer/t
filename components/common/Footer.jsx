import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="w-full border-t mt-8 mx-auto px-4 py-6 flex items-center justify-between text-sm text-white bg-red-800">
				<div>© {new Date().getFullYear()} Copyright - LOGO </div>
				<div className="flex items-center gap-4">
				 					<FaFacebook className="w-5 h-5 hover:opacity-80" />
									<FaTwitter className="w-5 h-5 hover:opacity-80" />
									<FaInstagram className="w-5 h-5 hover:opacity-80" />
 					<FaLinkedin className="w-5 h-5 hover:opacity-80" />

				</div>
		</footer>
	);
}
