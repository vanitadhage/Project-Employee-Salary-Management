
package Employee.Service;

import java.util.List;

import Employee.Repositary.EmployeeSalaryRepositary;
import Employee.model.SalaryModel;

public class EmployeeSalaryService
 {
	
	EmployeeSalaryRepositary er=new EmployeeSalaryRepositary();
	
	
	public  List<SalaryModel >totalSalary(int id,String name,int Month)
	{
		
		return er.totalSalary( id,name,Month);
	}
	
	public int DateWiseSalary(int id,String StartDate,String EndDate,int count)
	{
		return er.DateWiseSalary(id,StartDate,EndDate,count);
	}


	public int getAnnualPackage(int pack) 
	{
		return pack;
	}
	
 }
