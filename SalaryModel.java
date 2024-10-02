
package Employee.model;

public class SalaryModel
{
	private int id;
	private String name;
	private int count;
	private int AnnualPackage;
	
	public SalaryModel()
	{
		
	}
	
	
	public SalaryModel(int id,String name,int count,int AnnualPackage)
	{
		this.id=id;
		this.name=name;
		this.count=count;
		this.AnnualPackage=AnnualPackage;
	}


	public int getId() 
	{
		return id;
	}


	public void setId(int id)
	{
		this.id = id;
	}


	public String getName() 
	{
		return name;
	}


	public void setName(String name)
	{
		this.name = name;
	}


	public int getCount() 
	{
		return count;
	}


	public void setCount(int count)
	{
		this.count = count;
	}
	
	public int getAnnualPackage() 
	{
		return AnnualPackage;
	}


	public void setAnnualPackage(int AnnualPackage)
	{
		this.AnnualPackage = AnnualPackage;
	}

}
