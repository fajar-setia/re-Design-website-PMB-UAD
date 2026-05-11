import RegisterForm from "../components/Auth/RegisterForm";
import AuthImage from "../components/Auth/AuthImage";

export default function Register() {
  return (
    <main className="flex-grow flex items-center justify-center py-10 px-4 overflow-hidden">
      <div
        className="
          max-w-7xl
          w-full
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          items-center
        "
      >
        <div className="order-2 lg:order-1 animate-[slideLeft_.5s_ease]">
          <AuthImage />
        </div>

        <div className="order-1 lg:order-2 animate-[slideRight_.5s_ease]">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
