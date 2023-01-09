import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";

import css from "./SubForm.module.scss";

const SignupSchema = yup.object().shape({
  sub_email: yup.string().required("Email is required.").email("Valid email is required."),
});

function ArticlesForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    window.localStorage.setItem("user", JSON.stringify(data));
    navigate(`/dashboard`);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={"row justify-content-start align-items-start " + css.form__group}>
          <div className="col-14">
            <input className={"w-100 " + css.form__input} type="email" placeholder="EMAIL ADDRESS" {...register("sub_email")} />
            {errors.sub_email && <p className={css.form__error}>{errors.sub_email.message}</p>}
          </div>
          <input className={"col-7 " + css.form__submit} type="submit" value="Subscribe" />
        </div>
      </form>
    </>
  );
}

export default ArticlesForm;
