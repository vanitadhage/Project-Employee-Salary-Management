
package Employee.Repositary;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import Employee.model.EmployeeModel;
import Employee.model.SalaryModel;

public class EmployeeSalaryRepositary  extends DbConfig
 {

		public  List<SalaryModel>totalSalary(int id,String name,int Month)
		{
			List<SalaryModel>list2= new ArrayList<SalaryModel>();
			
			try 
			{
			
			
					stmt=conn.prepareStatement("select e.eid,e.ename ,p.package,count(at.status) from emploinfo e inner join attendance at on at.eid=e.eid inner join eposition p on p.pid=e.pid where  at.status=1  and at.eid=? and e.ename=? and month(at.adate)=? group by at.eid");
					
					stmt.setInt(1, id);
					stmt.setString(2,name);
					stmt.setInt(3,Month);
					rs = stmt.executeQuery();
					
					while (rs.next())
					{
				            SalaryModel s=new SalaryModel();
						    s.setId(rs.getInt("eid"));
						    s.setName(rs.getString("ename"));
						    s.setAnnualPackage(rs.getInt(3));
						    s.setCount(rs.getInt(4));
						    list2.add(s);	    
				   	}
					
				

			return list2.size()>0?list2:null;
				

			} 
			catch (Exception ex) 
			{
				System.out.println("When Employee Model GetbyName Error is " + ex);
				return null;
			}
		}
		

		
		
		public int DateWiseSalary(int id,String StartDate,String EndDate,int count)
		{
			try 
			{
	
					stmt=conn.prepareStatement("select count(status) from attendance where status=1 and eid=? and date(adate)>=? and date(adate)<=?");
					
					stmt.setInt(1, id);
					stmt.setString(2,StartDate);
					stmt.setString(3,EndDate);
					
					rs = stmt.executeQuery();
					
					while (rs.next())
					{
						return rs.getInt(1);
				   	}
			} 
			catch (Exception ex) 
			{
				System.out.println("When Employee Model GetbyName Error is " + ex);
				return 0;
			}
			return 0;
		}
		
		
		public int getPackage(int pack,int id) 
		{
			try 
			{
					stmt=conn.prepareStatement("select e.package from eposition e inner join emploinfo ee on ee.pid=e.pid where ee.eid=?");
				
					stmt.setInt(1,id);
					
					rs = stmt.executeQuery();
					
					while (rs.next())
					{
						return rs.getInt(1);
				   	}
			} 
			catch (Exception ex) 
			{
				System.out.println("When Employee Model GetbyName Error is " + ex);
				return 0;
			}
			return 0;
		}
	}
 
