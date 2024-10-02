
package Employee.Service;

import AdminPanel.AdminLogin;
import Employee.Repositary.EmployeeUseRepositary;
import EmployeePanel.EmployeeloginModel;

public class EmployeeWorkServices 
{

	EmployeeUseRepositary emp=new EmployeeUseRepositary();
	
//	public EmployeeloginModel getEmploLogin(int id)
//	{   
//			return emp.getEmploLogin(id);
//	}

public EmployeeloginModel getData(int id1)
	{
		return emp.getData(id1);
	}

  
}
