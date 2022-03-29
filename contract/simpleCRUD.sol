pragma solidity >=0.7.0 <0.9.0;

contract simpleCRUD{
      
      uint public count=0;
      mapping(address => Student) internal student;
      
      Student[] internal list;

      event Add(address owner);
      event Delete(address owner);
      event Dislay(address thisddress, string name, uint sdt, uint age,uint date);


      struct Student{
          address _add;
          string _name;
          uint _sdt;
          uint _age;
          uint _date;
      }

      function addStudent(string memory name, uint sdt ,uint age) public returns(bool) {
            list.push(Student(msg.sender,name,sdt,age,block.timestamp));
            count++;

            emit Add(msg.sender);
        return true;
      }

      function deleteStudent() public returns(bool) {
            address _adr= list[count-1]._add;
            list.pop();
            count--;

            emit Delete(_adr);
            return true;
      }

      function get(uint i) public returns(bool){
           emit Dislay(list[i]._add, list[i]._name, list[i]._sdt, list[i]._age, list[i]._date);
           return true;


      }

}