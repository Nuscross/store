import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filter = () => {

  const { meta, params } = useLoaderData();
  const { search, category, company, order, price, shipping } = params;
  
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput type="search" label="search product" name="search" size="input-sm" defaultValue={search} />
      <FormSelect label="select category" name="category" list={meta.categories} size="select-sm" defaultValue={category} />
      <FormSelect label="select company" name="company" list={meta.companies} size="select-sm" defaultValue={company} />
      <FormSelect label="sort by" name="order" list={["a-z", "z-a", "high", "low"]} size="select-sm" defaultValue={order} />
      <FormRange label="select price" name="price" size="range-sm" price={price} />
      <FormCheckbox label="free shipping" name="shipping" size="checkbox-sm" defaultValue={shipping} />
      <button type="submit" className="btn btn-primary btn-sm uppercase">search</button>
      <Link to="/product" className="btn btn-accent btn-sm uppercase">reset</Link>
    </Form>
  )

}

export default Filter