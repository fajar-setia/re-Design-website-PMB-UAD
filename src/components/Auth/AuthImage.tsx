//import ContentLoginWebp from "../../assets/content/contentLogin.webp";
import ContentLoginpng from "../../assets/content/contentLogin.png";

export default function AuthImage() {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          relative
          w-full
          max-w-xl
          h-[600px]
          rounded-2xl
          overflow-hidden
          shadow-2xl
        "
      >
        <img
          src={ContentLoginpng}
          alt="Campus"
          className="
          absolute inset-0
          w-full h-full
          object-cover
          "
        />
      </div>
    </div>
  );
}
