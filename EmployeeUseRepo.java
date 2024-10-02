
package Employee.Repositary;

import java.util.ArrayList;
import java.util.List;

import Employee.model.EmployeeModel;
import EmployeePanel.EmployeeloginModel;

public class EmployeeUseRepositary  extends DbConfig
{

	public EmployeeloginModel getData(int id)
	{
		try
		{
			EmployeeloginModel m=new EmployeeloginModel();
			
			stmt=conn.prepareStatement("select *from emploinfo where eid=?");
			stmt.setInt(1, id);
			
			rs=stmt.executeQuery();
			
			if(rs.next())
			{
				m.setUsername(rs.getString("username"));
				m.setPassword(rs.getString("password"));
				
					
			}
			return m;
			
			
		}
		catch(Exception ex)
		{
			
		}
		return null;
	}


	
	
}
