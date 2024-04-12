import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
      <circle cx="125" cy="125" r="125" />
      <rect x="0" y="300" rx="10" ry="10" width="280" height="23" />
      <rect x="0" y="341" rx="10" ry="10" width="280" height="54" />
      <rect x="0" y="415" rx="10" ry="10" width="95" height="30" />
      <rect x="184" y="415" rx="10" ry="10" width="95" height="30" />
    </ContentLoader>
)

export default Skeleton