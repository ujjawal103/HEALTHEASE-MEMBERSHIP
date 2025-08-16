export default function SocialIcons({ size = 24 }) {
  const cls = "hover:opacity-100 opacity-80 transition";
  return (
    <div className="flex items-center gap-4">
      <a className={cls} href="https://instagram.com" target="_blank" aria-label="Instagram">
        <img width={size} height={size} alt="Instagram"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
      </a>
      <a className={cls} href="https://facebook.com" target="_blank" aria-label="Facebook">
        <img width={size} height={size} alt="Facebook"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" />
      </a>
      <a className={cls} href="https://wa.me/919999999999" target="_blank" aria-label="WhatsApp">
        <img width={size} height={size} alt="WhatsApp"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
      </a>
    </div>
  );
}
