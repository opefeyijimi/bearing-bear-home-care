interface Props {
  title: string;
  description?: string;
}

export default function SectionHeader({
  title,
  description,
}: Props) {
  return (
    <div className="mb-8 border-b border-slate-200 pb-5">

      <h2 className="text-3xl font-bold text-slate-900">

        {title}

      </h2>

      {description && (

        <p className="mt-3 text-slate-600 leading-7">

          {description}

        </p>

      )}

    </div>
  );
}