
package EmployeePanel;

public class EmployeeloginModel
{
    private int eid;
	private String username;
     private String password;
    
     
         public EmployeeloginModel()
         {
        	 
         }
         
         public EmployeeloginModel(int eid,String username,String password)
         {
        	 this.eid=eid;
        	 this.username=username;
        	 this.password=password;
         }
         
         
         public void setId(int eid)
         {
        	 this.eid=eid;
         }

         
        
		public String getUsername()
		{
			return username;
		}

		public void setUsername(String username) 
		{
			this.username = username;
		}

		public String getPassword()
		{
			return password;
		}

		public void setPassword(String password)
		{
			this.password = password;
		}

	
         
         
         
}
