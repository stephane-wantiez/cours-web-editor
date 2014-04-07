<?php
namespace lib3dduo\casualCrossing\metabot\dataBinding;

use \lib3dduo\database\Database;
use \lib3dduo\database\Data;

class Template extends DataBinder{

	public function getData(){
		$where = $this->buildWhereClause('template', 't');
		
		$data = $this->getDB()->select('t.*, tt.name template_type_name
			FROM template t
				LEFT JOIN template_type tt ON tt.id=t.template_type
			WHERE '.$where);
		
		
		return $data;
	}
	
	public function addData($id){
		$data = new Data('template');
		$data->addString('name', $_POST['name']);
		$data->addRef('template_type', $_POST['template_type']);
		
		if($id){
			$this->getDB()->update($data, 'id=?', $id);
		}else{
			$id = $this->getDB()->insert($data);
		}
		return $id;
	}
	
	public function deleteData($id){
		$this->getDB()->delete('template', 'id=?', $id);
	}
}