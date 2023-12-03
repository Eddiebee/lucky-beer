const DataDict = ({ dt, dd }: { dt: string; dd: string }) => {
  return (
    <div className="flex justify-between gap-3 text-base mb-2 text-left font-light">
      <dt>{dt.charAt(0).toUpperCase() + dt.substring(1)}</dt>
      <dd className="w-[14rem]">{dd}</dd>
    </div>
  );
};
export default DataDict;
