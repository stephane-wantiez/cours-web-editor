<?php
namespace lib3dduo\casualCrossing\metabot\dataBinding;

use \lib3dduo\database\Database;
use \lib3dduo\database\Data;

class Config extends DataBinder{

	public function getData(){
		$where = $this->buildWhereClause('config', 'c');
		
		$data = $this->getDB()->select('c.*, ct.name config_type_name
			FROM config c
			LEFT JOIN config_type ct ON ct.id=c.config_type
			WHERE '.$where);		
		
		return $data;
	}
	
	public function addData($id){
		$data = new Data('config');
		$data->addString('name', $_POST['name']);
		$data->addString('identifier', $_POST['identifier']);
		$data->addDouble('value', $_POST['value']);
		$data->addRef('config_type', $_POST['config_type']);
		
		if($id){
			$this->getDB()->update($data, 'id=?', $id);
		}else{
			$id = $this->getDB()->insert($data);
		}
		return $id;
	}
	
	public function deleteData($id){
		$this->getDB()->delete('config', 'id=?', $id);
	}
}