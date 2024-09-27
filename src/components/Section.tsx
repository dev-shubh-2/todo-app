import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

const Section = () => {
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#f3e1cb] border-l border-black/[.08] px-[25px] pt-[13px] pb-[10px]">
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        <Button buttonType="secondary" devMode={true}>
          Login
        </Button>
        <Button buttonType="secondary" devMode={true}>
          Register
        </Button>
      </div>
    </section>
  );
};

export default Section;
