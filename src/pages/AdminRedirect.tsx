import { useEffect } from "react";

export default function AdminRedirect() {
  useEffect(() => {
    window.location.replace("/admin/");
  }, []);

  return (
    <div className="p-6 space-y-3 text-center">
      <h1 className="text-2xl font-semibold">CMS laden</h1>
      <p className="text-muted-foreground">
        Je wordt doorgestuurd naar de Decap CMS editor.
      </p>
      <a className="text-primary underline" href="/admin/">
        Open de editor handmatig
      </a>
    </div>
  );
}
