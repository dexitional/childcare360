import { fetcCategories, fetcChilds, fetcNurseries, fetcParents, fetcStaffs } from "@/backend/controller";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request, { params }: { params: { action: string } }) {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action");
    if(action == 'nursery'){
      const data = await fetcNurseries();
      return Response.json(data);
    
    } else if(action == 'staff'){
      const data = await fetcStaffs();
      return Response.json(data)
    
    } else if(action == 'child'){
      const data = await fetcChilds();
      return Response.json(data)
    
    } else if(action == 'parent'){
      const data = await fetcParents();
      return Response.json(data)
    
    } else if(action == 'category'){
      const data = await fetcCategories();
      return Response.json(data)
    }
    
    
    return Response.json(null);
}