import { Oval } from "react-loader-spinner";

export default function Loading(props) {
  return (
    props.isLoading && (
      <Oval
        height={40}
        width={40}
        color="red"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="gray"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    )
  );
}
